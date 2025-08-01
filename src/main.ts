import express, { Request, Response, NextFunction } from 'express';
import { router } from './api/routes/index.router'; // Ajusta ruta si es diferente

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Monta el router principal
  app.use('/', router);

  // Middleware para manejo de rutas no encontradas (404)
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      status: 404,
      error: 'Not Found',
      response: {
        message: [`Cannot ${req.method} ${req.originalUrl}`],
      },
    });
  });

  // Middleware global para errores
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    res.status(status).json({
      status,
      error: err.message || 'Internal Server Error',
    });
  });

  // Puerto dinámico para Render
  const port = Number(process.env.PORT) || 10000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
