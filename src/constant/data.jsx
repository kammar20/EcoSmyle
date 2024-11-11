import { GiRecycle, GiWaterDrop, GiBamboo } from 'react-icons/gi';
import { MdNaturePeople } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';

import classic from '../assets/productImg/classic.jpg';
import charcoal from '../assets/productImg/charcoal.jpg';
import kidspack from '../assets/productImg/kidspack.jpg';
import multi from '../assets/productImg/multi.jpg';
import familypack from '../assets/productImg/familypack.jpg';
import mouthpack from '../assets/productImg/mouthpack.jpg';

import person1 from '../assets/peopleImg/person1.jpg';
import person2 from '../assets/peopleImg/person2.jpg';
import person3 from '../assets/peopleImg/person3.jpg';
import person4 from '../assets/peopleImg/person4.jpg';
import person5 from '../assets/peopleImg/person5.jpg';
import person6 from '../assets/peopleImg/person6.jpg';
import person7 from '../assets/peopleImg/person7.jpg';

// Benefit section data
export const benefitData = [
  {
    id: 1,
    icon: <GiRecycle />,
    title: '100% Biodegradable Handle',
    desc: 'Our bamboo toothbrush handles are fully biodegradable, helping reduce plastic waste and promote sustainability.',
  },
  {
    id: 2,
    icon: <MdNaturePeople />,
    title: 'Naturally Antimicrobial',
    desc: 'Bamboo is naturally antimicrobial, reducing bacteria build-up and keeping your toothbrush clean between use',
  },
  {
    id: 3,
    icon: <GiWaterDrop />,
    title: 'BPA-Free Bristles',
    desc: 'Our bristles are made from BPA-free materials to ensure safe and effective cleaning for your teeth and gums.',
  },
];

// Making section data
export const makingData = [
  {
    id: 1,
    icon: <GiBamboo />,
    title: 'Sustainably Sourced Bamboo',
    desc: 'Our toothbrushes start with sustainably harvested bamboo, grown without harmful pesticides and chemicals.',
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: 'Eco-Friendly Manufacturing',
    desc: 'We use eco-conscious manufacturing processes to craft each brush with precision, ensuring high quality and minimal environmental impact.',
  },
  {
    id: 3,
    icon: <FaSmile />,
    title: 'Delivering a Better Smile',
    desc: 'Our brushes arrive in fully recyclable packaging, ready to help you brush sustainably and reduce plastic waste, one smile at a tim.',
  },
];

// add more product and also img
export const productData = [
  {
    id: 1,
    img: classic,
    productName: 'Classic Bamboo Toothbrush',
    productDesc:
      'Our classic bamboo toothbrush with soft, BPA-free bristles, perfect for everyday use.',
  },
  {
    id: 2,
    img: charcoal,
    productName: 'Charcoal-Infused Bamboo Toothbrush',
    productDesc:
      'This brush features activated charcoal-infused bristles for natural teeth whitening and odor control.',
  },
  {
    id: 3,
    img: kidspack,
    productName: ' Kids’ Bamboo Toothbrush',
    productDesc: `Sized for little hands, our kid's toothbrushes come with soft bristles and fun colors to encourage good brushing habits.`,
  },
  {
    id: 4,
    img: multi,
    productName: 'Bamboo Toothbrush Multipack',
    productDesc:
      'Get a set of three bamboo toothbrushes at a discounted rate, perfect for those committed to eco-friendly brushing.',
  },
  {
    id: 5,
    img: familypack,
    productName: 'Eco Family Pack',
    productDesc:
      'Our Family Pack includes two adult brushes and two kids’ brushes, making it easy for the whole family to brush sustainably.',
  },
  {
    id: 6,
    img: mouthpack,
    productName: 'Natural Mouthwash',
    productDesc:
      'Our eco-friendly mouthwash is made from all-natural ingredients, free from artificial colors and harsh chemicals, for a refreshing and gentle clean.',
  },
];

//Testimonial Section (add small img)
export const testimonialData = [
  {
    id: 1,
    img: person1,
    test: `I love the feel of the bamboo handle and the fact that I'm making a positive impact every time I brush.`,
    customer: 'Lily, Eco-Conscious Consumer',
  },
  {
    id: 2,
    img: person2,
    test: `The charcoal bristles really made a difference for me. Plus, it's nice knowing I'm not adding to plastic waste`,
    customer: 'James, Sustainable Shopper',
  },
  {
    id: 3,
    img: person3,
    test: 'The kids’ toothbrush is adorable and helps me teach my child about the importance of eco-friendly choices!',
    customer: 'Sophie, Parent',
  },
  {
    id: 4,
    img: person4,
    test: `EcoSmyle's natural mouthwash is a game-changer. It leaves my mouth feeling fresh without any harsh chemicals, and I love that it's made from natural ingredients.`,
    customer: 'Emma, Health-Conscious Consumer',
  },
  {
    id: 5,
    img: person5,
    test: 'I love the feel of the bamboo handle and the fact that I’m making a positive impact every time I brush.',
    customer: 'Noah, Environmental Advocate',
  },
  {
    id: 6,
    img: person6,
    test: `The natural mouthwash has such a refreshing taste and no burning sensation. I feel like I’m doing something healthy for myself and the planet.`,
    customer: 'Alex, Eco-Friendly Enthusiast',
  },
];

// Faq
export const faqData = [
  {
    id: 1,
    ques: 'Are EcoSmyle toothbrushes biodegradable?',
    ans: 'Yes! The bamboo handle is 100% biodegradable, and we recommend removing the bristles before composting.',
  },
  {
    id: 2,
    ques: 'How often should I replace my EcoSmyle toothbrush?',
    ans: `Like regular toothbrushes, it's best to replace your EcoSmyle toothbrush every three months.`,
  },
  {
    id: 3,
    ques: 'Is the packaging eco-friendly?',
    ans: 'Absolutely! We use fully recyclable packaging materials to ensure that every part of your purchase supports sustainability.',
  },
  {
    id: 4,
    ques: 'Are the bristles on EcoSmyle toothbrushes safe for sensitive gums?',
    ans: ' Yes, our bristles are made from BPA-free materials and are designed to be gentle on gums while effectively cleaning teeth.',
  },
  {
    id: 5,
    ques: `Is EcoSmyle's natural mouthwash safe for daily use?`,
    ans: ' Yes, our mouthwash is made from all-natural ingredients, making it safe and gentle enough for daily use without any harsh chemicals.',
  },
  {
    id: 6,
    ques: 'What’s the best way to store my EcoSmyle bamboo products?',
    ans: `We recommend storing your bamboo products in a dry place to prolong their lifespan. Avoid leaving them in standing water or overly damp areas.`,
  },
];
