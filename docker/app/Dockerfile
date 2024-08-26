FROM php:8-fpm

# Set environment variable for Node.js version
ENV NODE_MAJOR=21
ENV COMPOSER_MEMORY_LIMIT=-1

# Update and upgrade packages
RUN apt-get update && apt-get upgrade -y

# Install required dependencies
RUN apt-get install -y libicu-dev git zip unzip ca-certificates curl gnupg

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql intl

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer clear-cache

# Install Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Install Node.js (using the official script)
RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash - \
    && apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy project files to the container
COPY . /app

# Clean up
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Expose port (if needed, e.g., for PHP built-in server)
# EXPOSE 9000

# Entry point
CMD ["php-fpm"]
