package com.mybatis.kdt8.controller;

import com.mybatis.kdt8.domain.Board;
import com.mybatis.kdt8.dto.BoardDto;
import com.mybatis.kdt8.service.BoardService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class BoardController {

    @Autowired
    BoardService boardService;
    @GetMapping("/board")
    public String getBoards(Model model){
        List<BoardDto> list = boardService.getall();
        model.addAttribute("list",list);
        return "board";
    }
    @GetMapping("/board/search")
    @ResponseBody
    public String searchBoard(@RequestParam("word") String word){

        return String.valueOf(boardService.searchBoard(word));
    }

    @PostMapping("/board")
    @ResponseBody
    public void postBoard(@RequestBody Board board){
        boardService.insertBoard(board);
    }

    @PatchMapping("/board")
    @ResponseBody
    public void patchBoard(@RequestBody Board board){
        boardService.patchBoard(board);
    }

    @DeleteMapping("/board")
    @ResponseBody
    public void deleteBoard(@RequestParam int id){
        boardService.deleteBoard(id);
    }
}
