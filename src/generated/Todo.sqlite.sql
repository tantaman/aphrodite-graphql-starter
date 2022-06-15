-- SIGNED-SOURCE: <35c2266b50166bdb8c2eecc2c8fabda9>
CREATE TABLE
  IF NOT EXISTS "todo" (
    "id" bigint NOT NULL,
    "text" text NOT NULL,
    "listId" bigint NOT NULL,
    "complete" boolean NOT NULL,
    primary key ("id")
  )