package com.cogether.server.reply.controller;

import com.cogether.server.dto.MultiResponseDto;
import com.cogether.server.dto.SingleResponseDto;
<<<<<<< Updated upstream
import com.cogether.server.member.entity.Member;
import com.cogether.server.member.service.MemberService;
=======
//import com.cogether.server.member.entity.Member;
//import com.cogether.server.member.service.MemberService;
>>>>>>> Stashed changes
import com.cogether.server.board.entity.Board;
import com.cogether.server.reply.dto.ReplyDto;
import com.cogether.server.reply.entity.Reply;
import com.cogether.server.reply.mapper.ReplyMapper;
import com.cogether.server.reply.service.ReplyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@Slf4j
@RequestMapping("/boards")
public class ReplyController {
    private final ReplyService replyService;
    private final ReplyMapper mapper;
<<<<<<< Updated upstream
    private final MemberService memberService;
=======
    //private final MemberService memberService;
>>>>>>> Stashed changes
    private final com.cogether.server.board.service.BoardService boardService;

    public ReplyController(ReplyService replyService,
                           ReplyMapper mapper,
<<<<<<< Updated upstream
                           MemberService memberService,
                           com.cogether.server.board.service.BoardService boardService) {
        this.replyService = replyService;
        this.mapper = mapper;
        this.memberService = memberService;
=======
                           com.cogether.server.board.service.BoardService boardService) {
        this.replyService = replyService;
        this.mapper = mapper;
>>>>>>> Stashed changes
        this.boardService = boardService;
    }


    @GetMapping("/{board-id}/replies")
    public ResponseEntity getReplies(@PathVariable("board-id") @Positive long boardId,
                                     @RequestParam @Positive int page, @RequestParam @Positive int size){
        Page<Reply> pageReplies = replyService.findReplies(boardId,page-1,size);
        List<Reply> replies = pageReplies.getContent();
        List<ReplyDto.response> responses = mapper.repliesToReplyResponses(replies);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responses,pageReplies),HttpStatus.OK
        );
    }



    @PostMapping("/replies")
    public ResponseEntity postReply(@Valid @RequestBody ReplyDto.Post replyPost){
        Reply reply = mapper.replyPostToReply(replyPost);

<<<<<<< Updated upstream
        Member member = memberService.findMember(replyPost.getUsername());
        reply.setMember(member);
=======
        //Member member = memberService.findMember(replyPost.getUsername());
        //reply.setMember(member);
>>>>>>> Stashed changes

        Board board = boardService.findBoard(replyPost.getBoardId());
        reply.setBoard(board);

        Reply posted = replyService.createReply(reply);
        ReplyDto.response response = mapper.replyToReplyResponse(posted);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response),HttpStatus.CREATED
        );
    }


    @DeleteMapping("/{board-id}/{reply-id}")
    public ResponseEntity deleteReply(@PathVariable("board-id") @Positive long boardId,
                                      @PathVariable("reply-id") @Positive long replyId){

        replyService.deleteReply(replyId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
