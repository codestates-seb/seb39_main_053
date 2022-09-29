package com.cogether.server.reply.entity;

<<<<<<< Updated upstream
import com.cogether.server.member.entity.Member;
=======
//import com.cogether.server.member.entity.Member;
>>>>>>> Stashed changes
import com.cogether.server.board.entity.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime date = LocalDateTime.now();

<<<<<<< Updated upstream
    @Column(nullable = false)
    private long votes;
=======
>>>>>>> Stashed changes



    @ManyToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    public void setBoard(Board board){
        this.board = board;
        if(!board.getReplies().contains(this))
            board.getReplies().add(this);
        if(!board.getReplies().contains(this))
            board.getReplies().add(this);
    }


<<<<<<< Updated upstream
    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }

    public Reply(Long replyId, String content, long votes) {
        this.replyId = replyId;
        this.content = content;
        this.votes = votes;
=======
    //@OneToOne
    //@JoinColumn(name = "MEMBER_ID")
    //private Member member;

    //public void setMember(Member member){
        //this.member = member;
    //}

    public Reply(Long replyId, String content) {
        this.replyId = replyId;
        this.content = content;
>>>>>>> Stashed changes
    }
}

