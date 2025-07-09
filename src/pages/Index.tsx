import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const colors = [
    "Коралловый",
    "Бирюзовый",
    "Желтый",
    "Синий",
    "Розовый",
    "Зеленый",
  ];
  const sizes = ["S", "M", "L", "XL", "40x60", "60x90", "120x180"];

  const products = [
    {
      id: 1,
      name: "Коралловая сумка",
      price: 2500,
      image: "/img/36c7fb85-215f-4957-befd-f335f3694386.jpg",
      colors: ["Коралловый", "Бирюзовый"],
      sizes: ["S", "M", "L"],
      category: "сумки",
    },
    {
      id: 2,
      name: "Геометрический ковер",
      price: 4200,
      image: "/img/caea0fec-459e-40c6-b1df-b085b027477c.jpg",
      colors: ["Бирюзовый", "Желтый", "Коралловый"],
      sizes: ["60x90", "120x180"],
      category: "ковры",
    },
    {
      id: 3,
      name: "Шелковый шарф",
      price: 1800,
      image: "/img/36c7fb85-215f-4957-befd-f335f3694386.jpg",
      colors: ["Желтый", "Розовый"],
      sizes: ["M"],
      category: "аксессуары",
    },
    {
      id: 4,
      name: "Декоративная подушка",
      price: 1200,
      image: "/img/caea0fec-459e-40c6-b1df-b085b027477c.jpg",
      colors: ["Бирюзовый", "Коралловый"],
      sizes: ["40x60"],
      category: "текстиль",
    },
    {
      id: 5,
      name: "Минималистичные серьги",
      price: 3200,
      image: "/img/36c7fb85-215f-4957-befd-f335f3694386.jpg",
      colors: ["Желтый", "Розовый"],
      sizes: ["S"],
      category: "украшения",
    },
    {
      id: 6,
      name: 'Арт-ковер "Абстракция"',
      price: 6800,
      image: "/img/caea0fec-459e-40c6-b1df-b085b027477c.jpg",
      colors: ["Бирюзовый", "Коралловый", "Желтый"],
      sizes: ["120x180"],
      category: "ковры",
    },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) => {
    const colorMatch =
      selectedColors.length === 0 ||
      product.colors.some((color) => selectedColors.includes(color));
    const sizeMatch =
      selectedSizes.length === 0 ||
      product.sizes.some((size) => selectedSizes.includes(size));
    return colorMatch && sizeMatch;
  });

  const toggleFilter = (value: string, type: "color" | "size") => {
    if (type === "color") {
      setSelectedColors((prev) =>
        prev.includes(value)
          ? prev.filter((c) => c !== value)
          : [...prev, value],
      );
    } else {
      setSelectedSizes((prev) =>
        prev.includes(value)
          ? prev.filter((s) => s !== value)
          : [...prev, value],
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-yellow/20 to-turquoise/20 font-open-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-coral/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-montserrat font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                CreativeStore
              </h1>
              <Badge variant="outline" className="border-coral text-coral">
                Аксессуары & Ковры
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск товаров..."
                  className="w-64 pl-10 border-turquoise/30 focus:border-coral"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <Button
                variant="outline"
                className="relative border-coral text-coral hover:bg-coral hover:text-white"
              >
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-coral text-white text-xs px-1.5 py-0.5">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-turquoise/10 to-warm-yellow/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl font-montserrat font-bold mb-6 text-dark-slate">
              Творческие
              <span className="block bg-gradient-to-r from-coral via-turquoise to-warm-yellow bg-clip-text text-transparent">
                Аксессуары
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Уникальная коллекция сумок, ковров, украшений и текстиля для
              творческих личностей
            </p>
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white font-medium px-8 py-3 rounded-full"
            >
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6">
            <div>
              <h3 className="font-montserrat font-semibold text-dark-slate mb-3">
                Цвета:
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Button
                    key={color}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFilter(color, "color")}
                    className={`${
                      selectedColors.includes(color)
                        ? "bg-turquoise text-white border-turquoise"
                        : "border-gray-300 hover:border-turquoise"
                    } transition-all duration-200`}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-dark-slate mb-3">
                Размеры:
              </h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFilter(size, "size")}
                    className={`${
                      selectedSizes.includes(size)
                        ? "bg-warm-yellow text-dark-slate border-warm-yellow"
                        : "border-gray-300 hover:border-warm-yellow"
                    } transition-all duration-200`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-montserrat font-bold text-dark-slate mb-8 text-center">
            Каталог товаров
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-coral text-white">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-dark-slate group-hover:text-coral transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.colors.map((color) => (
                        <Badge
                          key={color}
                          variant="secondary"
                          className="text-xs"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-montserrat font-bold text-dark-slate">
                    {product.price.toLocaleString()} ₽
                  </span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="bg-turquoise hover:bg-turquoise/90 text-white"
                  >
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-coral/10 to-turquoise/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-montserrat font-bold text-dark-slate mb-6">
              Свяжитесь с нами
            </h3>
            <p className="text-gray-600 mb-8">
              Есть вопросы о наших уникальных аксессуарах? Мы всегда готовы
              помочь!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-coral hover:bg-coral/90 text-white">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
              <Button
                variant="outline"
                className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                info@creativestore.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-montserrat font-bold text-xl mb-4 text-coral">
                CreativeStore
              </h4>
              <p className="text-gray-300">
                Творческие аксессуары для вдохновения и самовыражения
              </p>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Сумки</li>
                <li>Ковры</li>
                <li>Украшения</li>
                <li>Текстиль</li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-300">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Возврат</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="mr-2 text-turquoise"
                  />
                  Москва, ул. Творческая, 42
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={16}
                    className="mr-2 text-turquoise"
                  />
                  Пн-Вс: 10:00-22:00
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreativeStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
