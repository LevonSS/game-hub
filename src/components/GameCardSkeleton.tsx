import { Card, Skeleton, Box, SkeletonText, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="400px" borderRadius={10} overflow="hidden">
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
