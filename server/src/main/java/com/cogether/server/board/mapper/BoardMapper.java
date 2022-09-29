package com.cogether.server.board.mapper;

import com.cogether.server.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostToBoard(com.cogether.server.board.dto.BoardDto.Post boardPost);
    Board boardPatchToBoard(com.cogether.server.board.dto.BoardDto.Patch boardPatch);
    com.cogether.server.board.dto.BoardDto.response boardToBoardResponse(Board board);
    List<com.cogether.server.board.dto.BoardDto.response> boardsToBoardResponses(List<Board> boards);
}
