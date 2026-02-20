import { Category } from 'src/technique/enums/category.enum';
import { Position } from 'src/technique/enums/position.enum';

export const TechniqueSeed = [
  {
    title: 'Classic Armbar',
    description:
      'A fundamental submission from the closed guard leveraging the hips to create hyper-extension on the elbow joint.',
    category: Category.SUBMISSION,
    startingPosition: Position.CLOSED_GUARD,
    endingPosition: Position.CLOSED_GUARD,
    difficultyLevel: 1,
    tags: ['submission', 'armbar', 'fundamentals'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Rear Naked Choke',
    description:
      'The most effective blood choke in grappling, applied from the back mount using a figure-four grip.',
    category: Category.SUBMISSION,
    startingPosition: Position.BACK_CONTROL,
    endingPosition: Position.BACK_CONTROL,
    difficultyLevel: 1,
    tags: ['choke', 'back-take', 'essential'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Triangle Choke',
    description:
      "A submission using the legs to isolate the opponent's neck and one arm, forming a triangular shape.",
    category: Category.SUBMISSION,
    startingPosition: Position.CLOSED_GUARD,
    endingPosition: Position.CLOSED_GUARD,
    difficultyLevel: 2,
    tags: ['submission', 'guard', 'legs'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Scissor Sweep',
    description:
      'A classic sweep using knee shield and a bottom leg kick to off-balance and flip the opponent.',
    category: Category.SWEEP,
    startingPosition: Position.CLOSED_GUARD,
    endingPosition: Position.MOUNT,
    difficultyLevel: 1,
    tags: ['sweep', 'guard', 'displacement'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Heel Hook',
    description:
      'A powerful twisting leg lock targeting the ligaments of the knee. High precision required.',
    category: Category.SUBMISSION,
    startingPosition: Position.ASHIGARAMI,
    endingPosition: Position.ASHIGARAMI,
    difficultyLevel: 4,
    tags: ['leg-lock', 'advanced', 'no-gi'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Kneecap Pass',
    description:
      "A dynamic pressure pass cutting the knee across the opponent's thigh to clear the guard.",
    category: Category.GUARD_PASS,
    startingPosition: Position.HALF_GUARD,
    endingPosition: Position.SIDE_CONTROL,
    difficultyLevel: 2,
    tags: ['passing', 'pressure', 'transition'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Bow and Arrow Choke',
    description:
      "A powerful collar choke from the back, using the lapel and the opponent's leg for leverage.",
    category: Category.SUBMISSION,
    startingPosition: Position.BACK_CONTROL,
    endingPosition: Position.BACK_CONTROL,
    difficultyLevel: 3,
    tags: ['choke', 'gi-only', 'back'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Guillotine Choke',
    description:
      'A front headlock choke that can be applied standing or from the guard.',
    category: Category.SUBMISSION,
    startingPosition: Position.STANDING,
    endingPosition: Position.STANDING,
    difficultyLevel: 2,
    tags: ['choke', 'headlock', 'fast'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Kimura from Side Control',
    description:
      'A shoulder lock using a double wrist lock grip to rotate the arm behind the back.',
    category: Category.SUBMISSION,
    startingPosition: Position.SIDE_CONTROL,
    endingPosition: Position.SIDE_CONTROL,
    difficultyLevel: 2,
    tags: ['shoulder-lock', 'control', 'power'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Omoplata',
    description:
      'A shoulder lock using the legs to isolate the arm, often used as a sweep or submission.',
    category: Category.SUBMISSION,
    startingPosition: Position.CLOSED_GUARD,
    endingPosition: Position.CLOSED_GUARD,
    difficultyLevel: 3,
    tags: ['submission', 'guard-play', 'flexible'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Berimbolo',
    description:
      "An advanced rolling transition from De La Riva guard to take the opponent's back.",
    category: Category.SWEEP,
    startingPosition: Position.DE_LA_RIVA,
    endingPosition: Position.BACK_CONTROL,
    difficultyLevel: 5,
    tags: ['modern-bjj', 'inversion', 'back-take'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Anaconda Choke',
    description:
      'An arm-triangle variation from the front headlock, rolling the opponent to finish.',
    category: Category.SUBMISSION,
    startingPosition: Position.TURTLE,
    endingPosition: Position.TURTLE,
    difficultyLevel: 4,
    tags: ['choke', 'front-headlock', 'rolling'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Ezekiel Choke',
    description:
      'Applying pressure to the neck using the sleeves (Gi) or the forearm (No-Gi).',
    category: Category.SUBMISSION,
    startingPosition: Position.MOUNT,
    endingPosition: Position.MOUNT,
    difficultyLevel: 2,
    tags: ['choke', 'pressure', 'sneaky'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: "D'Arce Choke",
    description:
      'A variation of the arm-triangle choke where the arm is threaded through the armpit and across the neck.',
    category: Category.SUBMISSION,
    startingPosition: Position.HALF_GUARD,
    endingPosition: Position.HALF_GUARD,
    difficultyLevel: 4,
    tags: ['choke', 'no-gi', 'advanced'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Single Leg Takedown',
    description:
      'A fundamental wrestling takedown attacking one leg to bring the opponent to the mat.',
    category: Category.TAKEDOWN,
    startingPosition: Position.STANDING,
    endingPosition: Position.HALF_GUARD,
    difficultyLevel: 2,
    tags: ['takedown', 'wrestling', 'fundamental'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
