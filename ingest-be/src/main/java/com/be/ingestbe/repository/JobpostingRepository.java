package com.be.ingestbe.repository;


import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.domain.QJobposting;
import com.querydsl.core.types.dsl.StringExpression;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;
import java.util.Optional;

@RepositoryRestController
public interface JobpostingRepository extends
        JpaRepository<Jobposting,Long>,
        QuerydslPredicateExecutor<Jobposting>, // 기본 적으로 이 Entity 안에 있는 모든 필드에 검색 기능을 추가 해준다.
        QuerydslBinderCustomizer<QJobposting>
{
    List<Jobposting> findAll();
    @Override
    default void customize(QuerydslBindings bindings, QJobposting root){
        bindings.excludeUnlistedProperties(true);
        bindings.including(root.job, root.career, root.employment_pattern,root.pay, root.skills, root.company_introduction, root.major_task, root.certified, root.preferential, root.hiring_process, root.benefits, root.location, root.company);
        bindings.bind(root.skills).first(StringExpression::containsIgnoreCase); // like '${v}' 쿼리생성
//        bindings.bind(root.content).first(StringExpression::containsIgnoreCase); // like '${v}' 쿼리생성
//        bindings.bind(root.hashtag).first(StringExpression::containsIgnoreCase); // like '${v}' 쿼리생성
//        bindings.bind(root.createdAt).first(DateTimeExpression::eq); // like '${v}' 쿼리생성
//        bindings.bind(root.createdBy).first(StringExpression::containsIgnoreCase); // like '${v}' 쿼리생성
//        bindings.bind(root.title).first(StringExpression::likeIgnoreCase); // like '%${v}%' 쿼리생성
    }
}
