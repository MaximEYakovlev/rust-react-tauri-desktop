import { Controller, Body, Delete, Param, Post } from '@nestjs/common';
import { DoctorsService } from 'src/doctors/doctors.service';
import { CreateDoctorDto } from 'src/doctors/dto/CreateDoctorDto';
import { Doctor } from 'src/doctors/models/doctor.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('doctor')
  async create(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorsService.create(createDoctorDto);
  }

  @Delete('doctor/:id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.doctorsService.remove(id);
  }
}
