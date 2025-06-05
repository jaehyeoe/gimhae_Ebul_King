// src/components/ProductIntro.jsx
import React from 'react';

const products = [
  { id: 1, name: '프리미엄 이불', desc: '최고급 소재로 제작된 포근한 이불', price: '150,000원', img: '/images/blanket1.jpg' },
  { id: 2, name: '경량 이불', desc: '가벼운 무게로 사계절 사용 가능', price: '90,000원', img: '/images/blanket2.jpg' },
  // 더 추가 가능
];

export default function ProductIntro() {
  return (
    <div>
      <h1>제품 소개</h1>
      <div className="product-list">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.desc}</p>
            <p>가격: {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
