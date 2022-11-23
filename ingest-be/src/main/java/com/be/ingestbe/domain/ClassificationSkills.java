package com.be.ingestbe.domain;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Entity
@ToString
public class ClassificationSkills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String skill;
    @Column(length = 50)
    private String category;

    protected ClassificationSkills(){}

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof ClassificationSkills classificationSkills)) return false;
        return id != null && id.equals(classificationSkills.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
