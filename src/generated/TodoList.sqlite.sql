-- SIGNED-SOURCE: <d897f1ca0a6b0a70b3f1cf093b0dd64e>
CREATE TABLE
  IF NOT EXISTS "todolist" (
    "id" bigint NOT NULL,
    "name" text NOT NULL,
    primary key ("id")
  )