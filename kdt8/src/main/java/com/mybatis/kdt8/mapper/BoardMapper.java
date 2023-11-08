package com.mybatis.kdt8.mapper;

import com.mybatis.kdt8.domain.Board;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
    List<Board> getAll();
    void insertBoard(Board board);

    void patchBoard(Board board);

    void deleteBoard(int id);

    int searchBoard(String word);
}
