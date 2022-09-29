package com.cogether.server.reply.repository;

import com.cogether.server.reply.entity.Reply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReplyRepository extends JpaRepository<Reply,Long> {
    public Optional<Reply> findByContent(String content);

    public Page<Reply> findByBoard_BoardId(long boardId, Pageable pageable);
}
