import { APP_TITLE } from '@/common/CommonUtils';


export default function AppFooter() {
  return (
    <footer className="bg-background-main px-6 h-16 flex justify-between items-center text-text-light">
      {new Date().getFullYear()} © {APP_TITLE}

    </footer> 
  );
}
