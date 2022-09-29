package com.cogether.server.reply.mapper;

import com.cogether.server.reply.dto.ReplyDto;
import com.cogether.server.reply.entity.Reply;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReplyMapper {
    Reply replyPostToReply (ReplyDto.Post replyPost);
    Reply replyPatchToReply(ReplyDto.Patch replyPatch);
    ReplyDto.response replyToReplyResponse(Reply reply);
    List<ReplyDto.response> repliesToReplyResponses(List<Reply> replies);
}

