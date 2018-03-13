$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  $('collapse').on('click', function () {
          var id = $(this).data("toggle"),
              $object = $(id),
              myNavbar = "dropdown";

          if ($object) {
              if ($object.hasClass(myNavbar)) {
                  $object.removeClass(myNavbar)
              } else {
                  $object.addClass(myNavbar)
              }
          }
      });
      - (void)scrollViewDidScroll:(UIScrollView *)scrollView
      {
          CGRect frame = self.navigationController.navigationBar.frame;
          CGFloat size = frame.size.height - 21;
          CGFloat framePercentageHidden = ((20 - frame.origin.y) / (frame.size.height - 1));
          CGFloat scrollOffset = scrollView.contentOffset.y;
          CGFloat scrollDiff = scrollOffset - self.previousScrollViewYOffset;
          CGFloat scrollHeight = scrollView.frame.size.height;
          CGFloat scrollContentSizeHeight = scrollView.contentSize.height + scrollView.contentInset.bottom;

          if (scrollOffset <= -scrollView.contentInset.top) {
              frame.origin.y = 20;
          } else if ((scrollOffset + scrollHeight) >= scrollContentSizeHeight) {
              frame.origin.y = -size;
          } else {
              frame.origin.y = MIN(20, MAX(-size, frame.origin.y - scrollDiff));
          }

          [self.navigationController.navigationBar setFrame:frame];
          [self updateBarButtonItems:(1 - framePercentageHidden)];
          self.previousScrollViewYOffset = scrollOffset;
      }

      - (void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView
      {
          [self stoppedScrolling];
      }

      - (void)scrollViewDidEndDragging:(UIScrollView *)scrollView
                        willDecelerate:(BOOL)decelerate
      {
          if (!decelerate) {
              [self stoppedScrolling];
          }
      }
