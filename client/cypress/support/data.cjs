const { PrismaClient } = require('@prisma/client');

const client = new PrismaClient();

async function createHero() {
  const hero = {
    name: 'Test Hero',
    price: 1,
    saves: 1,
    fans: 1,
    powers: {
      connect: [{ id: 1 }],
    },
  };

  const createdHero = await client.hero.create({
    data: hero,
  });

  await client.hero.update({
    where: {
      id: createdHero.id,
    },
    data: {
      name: `${createdHero.name} ${createdHero.id}`,
    },
  });

  return client.hero.findUnique({
    where: {
      id: createdHero.id,
    },
    include: {
      powers: true,
      avatar: {
        select: {
          id: true,
        },
      },
    },
  });
}

async function deleteHero(id) {
  await client.avatarImage.deleteMany({
    where: {
      heroId: id,
    },
  });

  return client.hero.deleteMany({
    where: {
      id,
    },
  });
}

module.exports = {
  createHero,
  deleteHero,
};

