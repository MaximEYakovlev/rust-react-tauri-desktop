import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDoctorDto } from './dto/CreateDoctorDto';
import { Doctor } from './models/doctor.model';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor) private readonly doctorModel: typeof Doctor,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorModel.create(createDoctorDto);
  }

  async remove(id: number): Promise<void> {
    const doctor = await this.doctorModel.findByPk(id);
    if (doctor) {
      await doctor.destroy();
    } else {
      throw new Error('Doctor not found');
    }
  }
}
