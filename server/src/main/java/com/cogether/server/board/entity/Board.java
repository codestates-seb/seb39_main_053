package com.cogether.server.board.entity;


//import com.cogether.server.member.entity.Member;

import com.cogether.server.reply.entity.Reply;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime created_at = LocalDateTime.now();



    //@OneToOne
    //@JoinColumn(name="MEMBER_ID")
    //private Member member;


    //@ManyToOne
    //@JoinColumn(name="MEMBER_ID")
    //private Member members;




    @OneToMany(mappedBy = "board", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Reply> replies = new ArrayList<>();


    //public void setMember(Member member){
        //this.member = member;
    //}


    public void setReply(Reply reply){
        replies.add(reply);
        if(reply.getBoard() != this)
            reply.setBoard(this);
    }


    public Board(Long boardId, String title, String content){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
    }
}
