FROM alpine:latest

# Install dependencies
RUN apk add --no-cache curl unzip libc6-compat

# Download PocketBase binary
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.11/pocketbase_0.22.11_linux_amd64.zip -o pb.zip \
    && unzip pb.zip -d /app \
    && rm pb.zip \
    && chmod +x /app/pocketbase

# Create data directory
RUN mkdir -p /app/pb_data

WORKDIR /app

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
