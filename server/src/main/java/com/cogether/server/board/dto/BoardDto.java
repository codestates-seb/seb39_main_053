package com.cogether.server.board.dto;


//import com.cogether.server.member.entity.Member;

import com.cogether.server.reply.dto.ReplyDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotEmpty(message = "내용을 입력하셔야 합니다.")
        private String content;

        private String username;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long boardId;

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotEmpty(message = "내용을 입력하셔야 합니다.")
        private String content;

        private String name;

        public void setBoardId(long boardId){
            this.boardId = boardId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class response{
        private long boardId;
        private String title;
        private String content;
        private LocalDateTime date;
        //private Member member;
        private List<ReplyDto.response> replies;
    }
}
