import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Card className='max-w-sm'>
        <CardHeader>
          <CardTitle className='text-base'>Pesan</CardTitle>
        </CardHeader>
        <CardContent className='text-muted-foreground grid gap-4'>
          <p>
            Teruntuk seseorang yang paling berharga dan sangat spesial, terima
            kasih telah hadir dalam hidupku. Kehadiranmu begitu indah, bagaikan
            pelangi yang muncul setelah hujan. Kamu telah membawa warna dalam
            kehidupanku yang sebelumnya kelam, menghadirkan cahaya serta
            kebahagiaan yang tak tergantikan
          </p>
          <p>
            Di mana pun dan kapan pun kamu berada, tetaplah membawa kebahagiaan.
            Aku akan selalu menjadi seseorang yang menantikan kehadiranmu
          </p>
        </CardContent>
        <CardFooter>
          <Link
            to='/silvana-nabila-shyifa'
            className={buttonVariants({ className: 'ml-auto' })}
          >
            Berikutnya
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
