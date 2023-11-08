package com.mybatis.kdt8.service;

import com.mybatis.kdt8.domain.Board;
import com.mybatis.kdt8.dto.BoardDto;
import com.mybatis.kdt8.mapper.BoardMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    @Autowired
    BoardMapper boardMapper;

    public List<BoardDto> getall() {
        List<Board> result = boardMapper.getAll();
        List<BoardDto> list = new ArrayList<>();
        for (Board board : result) {
            BoardDto boardDto = BoardDto.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .registered(board.getRegistered())
                    .no(board.getWriter()+board.getId())
                    .build();
            list.add(boardDto);
        }
        return list;
    }

    public void insertBoard(Board board) {
        boardMapper.insertBoard(board);
    }

    public void patchBoard(Board board){
        boardMapper.patchBoard(board);
    }

    public void deleteBoard(int id) {
        boardMapper.deleteBoard(id);
    }

    public int searchBoard(String word) {
        return boardMapper.searchBoard(word);
    }
}
