package com.cogether.server.reply.dto;

<<<<<<< Updated upstream
import com.cogether.server.member.entity.Member;
import com.cogether.server.board.entity.Board;
=======
//import com.cogether.server.member.entity.Member;
//import com.cogether.server.board.entity.Board;
>>>>>>> Stashed changes
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
public class ReplyDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotEmpty(message = "내용을 입력하셔야 합니다.")
        private String content;
        private String username;
        @NotNull
        private long boardId;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long replyId;

        @NotEmpty(message = "내용을 입력하셔야 합니다.")
        private String content;

        private String name;

    public void setReplyId(long replyId){
        this.replyId = replyId;
        }
    }


    @Getter
    @AllArgsConstructor
    public static class response{
        private long replyId;
        private String content;
        private LocalDateTime date;
<<<<<<< Updated upstream
        private long votes;
        private Member member;
=======
        //private Member member;
>>>>>>> Stashed changes
    }
}
