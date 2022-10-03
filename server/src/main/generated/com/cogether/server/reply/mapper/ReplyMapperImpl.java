package com.cogether.server.reply.mapper;

import com.cogether.server.reply.dto.ReplyDto;
import com.cogether.server.reply.entity.Reply;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-02T23:30:34+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16.1 (Oracle Corporation)"
)
@Component
public class ReplyMapperImpl implements ReplyMapper {

    @Override
    public Reply replyPostToReply(ReplyDto.Post replyPost) {
        if ( replyPost == null ) {
            return null;
        }

        Reply reply = new Reply();

        reply.setContent( replyPost.getContent() );

        return reply;
    }

    @Override
    public Reply replyPatchToReply(ReplyDto.Patch replyPatch) {
        if ( replyPatch == null ) {
            return null;
        }

        Reply reply = new Reply();

        reply.setReplyId( replyPatch.getReplyId() );
        reply.setContent( replyPatch.getContent() );

        return reply;
    }

    @Override
    public ReplyDto.response replyToReplyResponse(Reply reply) {
        if ( reply == null ) {
            return null;
        }

        long replyId = 0L;
        String content = null;
        LocalDateTime created_at = null;

        if ( reply.getReplyId() != null ) {
            replyId = reply.getReplyId();
        }
        content = reply.getContent();
        created_at = reply.getDate();

        ReplyDto.response response = new ReplyDto.response( replyId, content, created_at );

        return response;
    }

    @Override
    public List<ReplyDto.response> repliesToReplyResponses(List<Reply> replies) {
        if ( replies == null ) {
            return null;
        }

        List<ReplyDto.response> list = new ArrayList<ReplyDto.response>( replies.size() );
        for ( Reply reply : replies ) {
            list.add( replyToReplyResponse( reply ) );
        }

        return list;
    }
}
