import { Controller, Body, Delete, Param, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/CreateDoctorDto';
import { Doctor } from './models/doctor.model';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsService.create(createDoctorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.doctorsService.remove(id);
  }
}
