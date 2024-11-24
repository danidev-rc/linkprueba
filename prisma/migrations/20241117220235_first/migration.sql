-- CreateTable
CREATE TABLE "Links" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "linky" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" INTEGER NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "lastClicked" DATETIME,
    CONSTRAINT "Links_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" INTEGER NOT NULL,
    CONSTRAINT "Tags_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LinkTags" (
    "linkId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("linkId", "tagId"),
    CONSTRAINT "LinkTags_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Links" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LinkTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "username" TEXT,
    "image" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "limitLinks" INTEGER NOT NULL DEFAULT 30
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_linky_key" ON "Links"("linky");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
