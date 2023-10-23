import { PrismaClient } from '@prisma/client';
import { readReplicas } from '@prisma/extension-read-replicas';

const testClient = new PrismaClient().$extends(readReplicas({ url: '' }));

// error : TS2339: Property $primary does not exist on type
testClient.$primary();
