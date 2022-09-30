package com.cogether.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    Question_NOT_FOUND(404, "Question Not Found"),
    Answer_NOT_FOUND(404, "Answer Not Found"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    INVALID_MEMBER_STATUS(400, "Invalid member status");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
