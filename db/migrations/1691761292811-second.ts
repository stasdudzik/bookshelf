import { MigrationInterface, QueryRunner } from 'typeorm';

export class Second1691761292811 implements MigrationInterface {
  name = 'Second1691761292811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "friendships" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_08af97d0be72942681757f07bc8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "booksCollectionId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "books_collections" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "collection_name" character varying NOT NULL, "userIdId" integer, CONSTRAINT "PK_4ce531c9c6dde93972afc9f5025" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "genre" character varying NOT NULL, "yearPublished" character varying NOT NULL, "language" character varying NOT NULL, "ISBN" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "collection_books" ("id" SERIAL NOT NULL, "is_free" boolean NOT NULL, "isEbook" boolean NOT NULL, "fileUrl" character varying NOT NULL, "collectionIdId" integer, "bookIdId" integer, CONSTRAINT "PK_1fe41b60657b25d7dfc1b2707d2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book_statuses" ("id" SERIAL NOT NULL, CONSTRAINT "PK_3b04c9c8c44922a05a0c3198766" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', "booksCollectionId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_96033c3105d6de7b35213240cc5" FOREIGN KEY ("booksCollectionId") REFERENCES "books_collections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_collections" ADD CONSTRAINT "FK_f00216b82b9aec950062e45a899" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_books" ADD CONSTRAINT "FK_04389fd179e9aec9017b6f70e9b" FOREIGN KEY ("collectionIdId") REFERENCES "books_collections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_books" ADD CONSTRAINT "FK_debe7a11f9b44a932a83ef7ad70" FOREIGN KEY ("bookIdId") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_f440726e0bae4ff12908e109f41" FOREIGN KEY ("booksCollectionId") REFERENCES "books_collections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_f440726e0bae4ff12908e109f41"`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_books" DROP CONSTRAINT "FK_debe7a11f9b44a932a83ef7ad70"`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_books" DROP CONSTRAINT "FK_04389fd179e9aec9017b6f70e9b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_collections" DROP CONSTRAINT "FK_f00216b82b9aec950062e45a899"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_96033c3105d6de7b35213240cc5"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "book_statuses"`);
    await queryRunner.query(`DROP TABLE "collection_books"`);
    await queryRunner.query(`DROP TABLE "books"`);
    await queryRunner.query(`DROP TABLE "books_collections"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "friendships"`);
  }
}
