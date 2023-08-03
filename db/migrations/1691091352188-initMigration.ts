import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1691091352188 implements MigrationInterface {
  name = 'InitMigration1691091352188';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "friendship" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_dbd6fb568cd912c5140307075cc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "books_collection" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "collection_name" character varying NOT NULL, "userIdId" integer, CONSTRAINT "PK_2c7b54c0e17618cada4b5143ab3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "genre" character varying NOT NULL, "yearPublished" character varying NOT NULL, "language" character varying NOT NULL, "ISBN" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "collection_book" ("id" SERIAL NOT NULL, "is_free" boolean NOT NULL, "isEbook" boolean NOT NULL, "fileUrl" character varying NOT NULL, "collectionIdId" integer, "bookIdId" integer, CONSTRAINT "PK_094296b75a35ed3d7e2d0b8a07f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book_status" ("id" SERIAL NOT NULL, CONSTRAINT "PK_417283569406ea2313052af80fe" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_f440726e0bae4ff12908e109f41" FOREIGN KEY ("booksCollectionId") REFERENCES "books_collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_collection" ADD CONSTRAINT "FK_ab01a258f57a8cf814430f9ea1c" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_book" ADD CONSTRAINT "FK_39eb5fafd97b9e7b4c5dd6c0e91" FOREIGN KEY ("collectionIdId") REFERENCES "books_collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_book" ADD CONSTRAINT "FK_e3fd505a366a2716bbaf8e49333" FOREIGN KEY ("bookIdId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "collection_book" DROP CONSTRAINT "FK_e3fd505a366a2716bbaf8e49333"`,
    );
    await queryRunner.query(
      `ALTER TABLE "collection_book" DROP CONSTRAINT "FK_39eb5fafd97b9e7b4c5dd6c0e91"`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_collection" DROP CONSTRAINT "FK_ab01a258f57a8cf814430f9ea1c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_f440726e0bae4ff12908e109f41"`,
    );
    await queryRunner.query(`DROP TABLE "book_status"`);
    await queryRunner.query(`DROP TABLE "collection_book"`);
    await queryRunner.query(`DROP TABLE "book"`);
    await queryRunner.query(`DROP TABLE "books_collection"`);
    await queryRunner.query(`DROP TABLE "friendship"`);
  }
}
