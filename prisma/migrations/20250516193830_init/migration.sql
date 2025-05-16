-- CreateTable
CREATE TABLE "event_store" (
    "id" TEXT NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER,

    CONSTRAINT "event_store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "event_store_aggregateType_aggregateId_idx" ON "event_store"("aggregateType", "aggregateId");
