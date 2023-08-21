package com.eeaao.jukebox.youtube.controller;

import com.eeaao.jukebox.youtube.service.YoutubeSearchService;
import com.google.api.services.youtube.model.SearchResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/youtube/api")
public class YoutubeController {

    private final YoutubeSearchService youtubeSearchService;

    @GetMapping("/music")
    public ResponseEntity<List<SearchResult>> searchMusic(@RequestParam String query) {
        try {
            List<SearchResult> searchResults =
                    youtubeSearchService.searchVideos(query);
            return ResponseEntity.ok().body(searchResults);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().body(null);
    }
}
