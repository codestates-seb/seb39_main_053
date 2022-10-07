package com.cogether.server.answer.entity;

import com.cogether.server.audit.BaseTimeEntity;
import com.cogether.server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(length = 20, nullable = false)
    private String writerId;

    @Column(length = 500, nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }
}
