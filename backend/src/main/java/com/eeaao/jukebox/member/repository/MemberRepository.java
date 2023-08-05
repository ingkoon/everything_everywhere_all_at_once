package com.eeaao.jukebox.member.repository;

import com.eeaao.jukebox.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Long, Member> {
}
