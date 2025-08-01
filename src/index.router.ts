import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

// Ruta POST para crear instancia
router.post('/api/instance/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    // Aquí puedes añadir tu lógica de creación real
    // Por ahora responde con lo que recibe
    res.status(200).json({
      status: 200,
      message: 'Instance created successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export { router };
