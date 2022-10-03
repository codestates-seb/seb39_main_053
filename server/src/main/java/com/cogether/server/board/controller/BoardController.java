package com.cogether.server.board.controller;

import com.cogether.server.board.mapper.BoardMapper;
import com.cogether.server.board.service.BoardService;
import com.cogether.server.dto.MultiResponseDto;

import com.cogether.server.dto.SingleResponseDto;

//import com.cogether.server.member.entity.Member;
//import com.cogether.server.member.service.MemberService;

import com.cogether.server.board.entity.Board;
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
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper mapper;

    //private final MemberService memberService;

    //public BoardController(com.cogether.server.board.service.BoardService boardService,
                           //com.cogether.server.board.mapper.BoardMapper mapper,
                           //MemberService memberService){
        //this.boardService = boardService;
        //this.mapper = mapper;
        //this.memberService = memberService;
    //}

    public BoardController(BoardService boardService,
                           BoardMapper mapper){
        this.boardService = boardService;
        this.mapper = mapper;
    }


    @GetMapping("/boardpage")

    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size){
        Page<Board> pageBoards = boardService.findBoards(page-1,size);
        List<Board> boards = pageBoards.getContent();
        List<com.cogether.server.board.dto.BoardDto.response> responses = mapper.boardsToBoardResponses(boards);
        return new ResponseEntity<>(
                new MultiResponseDto<>(responses,pageBoards), HttpStatus.OK
        );
    }



    @PostMapping("/upload")
    public ResponseEntity postBoard(@Valid @RequestBody com.cogether.server.board.dto.BoardDto.Post boardPost){
        Board board = mapper.boardPostToBoard(boardPost);

        //Member member = memberService.findMember(boardPost.getUsername());
        //board.setMember(member);


        Board posted = boardService.createBoard(board);
        com.cogether.server.board.dto.BoardDto.response response = mapper.boardToBoardResponse(posted);


        return new ResponseEntity<>(
                new SingleResponseDto<>(response),HttpStatus.CREATED
        );
    }


    @DeleteMapping("/{boardId}")
    public ResponseEntity deleteBoard(@PathVariable("boardId") @Positive long boardId){
        boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/{boardId}")
    public ResponseEntity getBoard(@PathVariable("boardId") @Positive long boardId){
        Board board = boardService.findBoard(boardId);
        com.cogether.server.board.dto.BoardDto.response response = mapper.boardToBoardResponse(board);

        return new ResponseEntity<>(
                new SingleResponseDto<>(response),HttpStatus.OK
        );
    }
}
