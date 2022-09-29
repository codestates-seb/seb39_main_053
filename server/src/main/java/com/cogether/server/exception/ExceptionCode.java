package com.cogether.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    BOARD_NOT_FOUND(404,"Board not found"),
    BOARD_EXISTS(409, "Board exists"),
    BOARD_CANNOT_CHANGE(403,"Board can not change"),
    REPLY_NOT_FOUND(404,"Reply not found"),
    REPLY_EXISTS(409, "Reply exists"),

    REPLY_CANNOT_CHANGE(403,"Reply can not change"),
    MEMBER_NOT_FOUND(404,"Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    MEMBER_CANNOT_CHANGE(403,"Member can not change");


    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}
