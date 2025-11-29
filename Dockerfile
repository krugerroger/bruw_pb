FROM alpine:latest

# Install curl + unzip + libc6-compat (required for PocketBase binary)
RUN apk add --no-cache curl unzip libc6-compat

# Download PocketBase
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.11/pocketbase_0.22.11_linux_amd64.zip -o pb.zip \
    && unzip pb.zip \
    && rm pb.zip \
    && chmod +x pocketbase

# Create app folder
RUN mkdir -p /app/pb_data
COPY . /app

WORKDIR /app

# Expose PocketBase internal default port
EXPOSE 8090

# Start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
