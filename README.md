<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Установка


1. Запускаем контейнеры docker если он есть* иначе стандартный установка/запуск

```
cd docker_s
```

```
docker-compose up -d
```

2. Установка зависимостей

```
docker-compose exec php-fpm bash
```

```
composer i
```

Восстанавливаем .env

```
php artisan migrate --seed
```

```
php artisan key:generate
```


3. В другом терминале устанавливаем зависимости и компилируем

```
npm i
```

```
npm run dev
```
