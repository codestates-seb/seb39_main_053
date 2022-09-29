package com.cogether.server.board.entity;

<<<<<<< Updated upstream
import com.cogether.server.member.entity.Member;
=======
//import com.cogether.server.member.entity.Member;
>>>>>>> Stashed changes
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

    @Column(nullable = false, updatable = true, length = 100)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime date = LocalDateTime.now();

<<<<<<< Updated upstream
    @Column(nullable = false)
    private long votes;


    @OneToOne
    @JoinColumn(name="MEMBER_ID")
    private Member member;


    @ManyToOne
    @JoinColumn(name="MEMBER_ID")
    private Member members;
=======

    //@OneToOne
    //@JoinColumn(name="MEMBER_ID")
    //private Member member;


    //@ManyToOne
    //@JoinColumn(name="MEMBER_ID")
    //private Member members;
>>>>>>> Stashed changes



    @OneToMany(mappedBy = "board", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Reply> replies = new ArrayList<>();

<<<<<<< Updated upstream
    public void setMember(Member member){
        this.member = member;
    }
=======
    //public void setMember(Member member){
        //this.member = member;
    //}
>>>>>>> Stashed changes

    public void setReply(Reply reply){
        replies.add(reply);
        if(reply.getBoard() != this)
            reply.setBoard(this);
    }

<<<<<<< Updated upstream
    public Board(Long boardId, String title, String content, int votes){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.votes = votes;
=======
    public Board(Long boardId, String title, String content){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
>>>>>>> Stashed changes
    }
}
