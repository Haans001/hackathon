-- CreateTable
CREATE TABLE "Organisation" (
    "id" SERIAL NOT NULL,
    "owner" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganisationsOnUsers" (
    "organisationId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrganisationsOnUsers_pkey" PRIMARY KEY ("organisationId","userId")
);

-- AddForeignKey
ALTER TABLE "OrganisationsOnUsers" ADD CONSTRAINT "OrganisationsOnUsers_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganisationsOnUsers" ADD CONSTRAINT "OrganisationsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
