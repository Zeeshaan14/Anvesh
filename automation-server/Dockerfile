FROM mcr.microsoft.com/playwright/python:v1.57.0-noble

WORKDIR /app

# Install uv
RUN pip install uv

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install dependencies
# --frozen ensures we use the exact versions from uv.lock
RUN uv sync --frozen

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 8000

# Run the application
# We use --host 0.0.0.0 to make it accessible from outside the container
CMD ["uv", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
