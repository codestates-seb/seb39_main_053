package com.cogether.server.board.service;

import com.cogether.server.exception.BusinessLogicException;
import com.cogether.server.exception.ExceptionCode;
import com.cogether.server.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Service
public class BoardService {
    private final com.cogether.server.board.repository.BoardRepository boardRepository;

    public BoardService(com.cogether.server.board.repository.BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }


    public Page<Board> findBoards(int page, int size){

        return boardRepository.findAll(PageRequest.of(page,size, Sort.by("boardId").descending()));
    }


    public Board createBoard(Board board){

        return boardRepository.save(board);
    }


    public void deleteBoard(long boardId){

        Board board = findVerifiedBoard(boardId);

        boardRepository.delete(board);
    }


    public Board findBoard(long boardId){

        return findVerifiedBoard(boardId);
    }



    private void verifyExistsTitle(String title){
        Optional<Board> board = boardRepository.findByTitle(title);
        if(board.isPresent())
            throw new BusinessLogicException(ExceptionCode.BOARD_EXISTS);
    }


    public Board findVerifiedBoard(long boardId){

        Optional<Board> optionalBoard =
                boardRepository.findById(boardId);


        Board findBoard =
                optionalBoard.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));

        return findBoard;
    }

}
