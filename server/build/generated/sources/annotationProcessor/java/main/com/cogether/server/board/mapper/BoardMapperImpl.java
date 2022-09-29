package com.cogether.server.board.mapper;

import com.cogether.server.board.dto.BoardDto;
import com.cogether.server.board.entity.Board;
import com.cogether.server.reply.dto.ReplyDto;
import com.cogether.server.reply.entity.Reply;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-29T17:32:01+0900",
    comments = "version: 1.5.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.16.1 (Oracle Corporation)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPostToBoard(BoardDto.Post boardPost) {
        if ( boardPost == null ) {
            return null;
        }

        Board board = new Board();

        board.setTitle( boardPost.getTitle() );
        board.setContent( boardPost.getContent() );

        return board;
    }

    @Override
    public Board boardPatchToBoard(BoardDto.Patch boardPatch) {
        if ( boardPatch == null ) {
            return null;
        }

        Board board = new Board();

        board.setBoardId( boardPatch.getBoardId() );
        board.setTitle( boardPatch.getTitle() );
        board.setContent( boardPatch.getContent() );

        return board;
    }

    @Override
    public BoardDto.response boardToBoardResponse(Board board) {
        if ( board == null ) {
            return null;
        }

        List<ReplyDto.response> replies = null;
        long boardId = 0L;
        String title = null;
        String content = null;
        LocalDateTime date = null;

        replies = replyListToresponseList( board.getReplies() );
        if ( board.getBoardId() != null ) {
            boardId = board.getBoardId();
        }
        title = board.getTitle();
        content = board.getContent();
        date = board.getDate();

        BoardDto.response response = new BoardDto.response( boardId, title, content, date, replies );

        return response;
    }

    @Override
    public List<BoardDto.response> boardsToBoardResponses(List<Board> boards) {
        if ( boards == null ) {
            return null;
        }

        List<BoardDto.response> list = new ArrayList<BoardDto.response>( boards.size() );
        for ( Board board : boards ) {
            list.add( boardToBoardResponse( board ) );
        }

        return list;
    }

    protected ReplyDto.response replyToresponse(Reply reply) {
        if ( reply == null ) {
            return null;
        }

        long replyId = 0L;
        String content = null;
        LocalDateTime date = null;

        if ( reply.getReplyId() != null ) {
            replyId = reply.getReplyId();
        }
        content = reply.getContent();
        date = reply.getDate();

        ReplyDto.response response = new ReplyDto.response( replyId, content, date );

        return response;
    }

    protected List<ReplyDto.response> replyListToresponseList(List<Reply> list) {
        if ( list == null ) {
            return null;
        }

        List<ReplyDto.response> list1 = new ArrayList<ReplyDto.response>( list.size() );
        for ( Reply reply : list ) {
            list1.add( replyToresponse( reply ) );
        }

        return list1;
    }
}
