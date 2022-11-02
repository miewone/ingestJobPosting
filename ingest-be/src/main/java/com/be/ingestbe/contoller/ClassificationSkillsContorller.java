package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import com.be.ingestbe.repository.ClassificationSkillsMapperRepository;
import com.be.ingestbe.service.ClassificationSkillsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

@RequestMapping("/category")
@RestController
@RequiredArgsConstructor
public class ClassificationSkillsContorller {

    private final ClassificationSkillsService classificationSkillsService;
    @GetMapping("/all")
    public List<ClassificationSkillsMapper> getAll(){
        return classificationSkillsService.getskills();
    }

    @GetMapping("/onlycategory")
    public List<String> getCategory(){
        return classificationSkillsService.getOnlyCategory();
    }

    @PostMapping("/search")
    public Map<String,Long> getSkillsByCategory(@RequestBody String category){
        category = category.substring(0, category.length()-1);
        return classificationSkillsService.searchCategory(URLDecoder.decode(category, StandardCharsets.UTF_8));
    }
}
