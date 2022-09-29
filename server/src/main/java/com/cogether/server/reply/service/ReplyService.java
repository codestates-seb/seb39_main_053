package com.cogether.server.reply.service;

import com.cogether.server.exception.BusinessLogicException;
import com.cogether.server.exception.ExceptionCode;
import com.cogether.server.board.entity.Board;
import com.cogether.server.reply.entity.Reply;
import com.cogether.server.reply.repository.ReplyRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class ReplyService {

    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository){
        this.replyRepository = replyRepository;
    }


    public Page<Reply> findReplies(long boardId,int page, int size){
        return replyRepository.findByBoard_BoardId(boardId, PageRequest.of(page,size, Sort.by("replyId").descending()));
    }


    public Reply createReply(Reply reply){


        return replyRepository.save(reply);
    }


    public void deleteReply(long replyId){
        Reply findReply = findVerifiedReply(replyId);

        replyRepository.delete(findReply);
    }


    private void verifyExistsContent(String content){
        Optional<Reply> reply = replyRepository.findByContent(content);
        if(reply.isPresent()){
            throw new BusinessLogicException(ExceptionCode.REPLY_EXISTS);
        }
    }

    public Reply findVerifiedReply(long replyId){

        Optional<Reply> optionalReply = replyRepository.findById(replyId);


        Reply findReply =
                optionalReply.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REPLY_NOT_FOUND));

        return findReply;
    }

}
