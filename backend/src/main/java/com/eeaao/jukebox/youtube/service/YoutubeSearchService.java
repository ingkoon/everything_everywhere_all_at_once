package com.eeaao.jukebox.youtube.service;


import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class YoutubeSearchService {
    private static final long NUMBER_OF_VIDEOS_RETURNED = 25;
    @Value("${youtube-data.api-key}")
    private String API_KEY;

    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static HttpTransport httpTransport;

    static {
        try {
            httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        } catch (GeneralSecurityException | IOException e) {
            e.printStackTrace();
        }
    }

    public List<SearchResult> searchVideos(String query) throws IOException {
        log.info(API_KEY);
        YouTube youtube = new YouTube.Builder(httpTransport, JSON_FACTORY, null)
                .setApplicationName("YourApp")
                .build();
        YouTube.Search.List searchRequest = youtube.search().list(Collections.singletonList("id,snippet"));
        searchRequest.setKey(API_KEY);
        searchRequest.setQ(query);
        searchRequest.setType(Collections.singletonList("video"));
        searchRequest.setMaxResults(NUMBER_OF_VIDEOS_RETURNED);  // 최대 결과 수

        SearchListResponse searchResponse = searchRequest.execute();
        return searchResponse.getItems();
    }
}
