# 16.sql-review
1. 도서등록을 만든다
2. 리스트(get): 127.0.0.1:3000/book
3. 등록(get): 127.0.0.1:3000/book/create
4. 등록(저장, post): 127.0.0.1:3000/book/save
5. 삭제(get): 127.0.0.1:3000/book/remove/2
6. 수정(get): 127.0.0.1:3000/book/update/2
7. 수정(저장, post): 127.0.0.1:3000/book/update
8. 테이블설계
-----
database명: booldook
table명: books
id: int(10) - auto increment, primary key - 번호
name: varchar(255) - not null - 책제목
writer: varchar(255) - null - 저자
wdate: datetime - 등록일(저장시점)
-----